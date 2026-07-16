#!/usr/bin/env node
/**
 * Génère les PDFs de valorisation FR et EN depuis les templates HTML.
 * Usage: node scripts/generate-valorisation-pdf.mjs
 */
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.join(__dirname, '..', 'docs');

const LOCALES = [
  {
    id: 'fr',
    html: 'valorisation-template-fr.html',
    pdf: 'valorisation-site-xohair.pdf',
    footerLeft: 'Document confidentiel — XOhair',
  },
  {
    id: 'en',
    html: 'valorisation-template-en.html',
    pdf: 'valorisation-site-xohair-en.pdf',
    footerLeft: 'Confidential — XOhair',
  },
];

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  for (const locale of LOCALES) {
    const htmlPath = path.join(__dirname, locale.html);
    const pdfPath = path.join(docsDir, locale.pdf);
    const page = await browser.newPage();

    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

    await page
      .waitForFunction(
        () => document.querySelectorAll('.mermaid svg').length >= 2,
        { timeout: 20000 }
      )
      .catch(() => {
        console.warn(`[${locale.id}] Avertissement: rendu Mermaid incomplet.`);
      });

    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: `
        <div style="width:100%;font-size:8px;color:#888;padding:0 20mm;display:flex;justify-content:space-between;align-items:center;font-family:Outfit,sans-serif;">
          <span>${locale.footerLeft}</span>
          <span>Alfred Ahoussinou · 2026 · Page <span class="pageNumber"></span> / <span class="totalPages"></span></span>
        </div>
      `,
      margin: { top: '22mm', bottom: '24mm', left: '20mm', right: '20mm' },
      preferCSSPageSize: true,
    });

    console.log(`PDF [${locale.id}] généré : ${pdfPath}`);
    await page.close();
  }
} finally {
  await browser.close();
}
