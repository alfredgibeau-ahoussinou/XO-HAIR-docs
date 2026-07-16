#!/usr/bin/env node
/**
 * Génère docs/valorisation-site-xohair.pdf depuis le template HTML.
 * Usage: node scripts/generate-valorisation-pdf.mjs
 */
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const htmlPath = path.join(__dirname, 'valorisation-template.html');
const pdfPath = path.join(__dirname, '..', 'docs', 'valorisation-site-xohair.pdf');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  // Attendre le rendu Mermaid
  await page.waitForFunction(
    () => {
      const svgs = document.querySelectorAll('.mermaid svg');
      return svgs.length >= 2;
    },
    { timeout: 15000 }
  ).catch(() => {
    console.warn('Avertissement: rendu Mermaid incomplet, PDF généré quand même.');
  });

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `
      <div style="width:100%;font-size:8px;color:#666;padding:0 18mm;display:flex;justify-content:space-between;font-family:Outfit,sans-serif;">
        <span>Document confidentiel — XOhair</span>
        <span>Page <span class="pageNumber"></span> / <span class="totalPages"></span></span>
      </div>
    `,
    margin: { top: '18mm', bottom: '22mm', left: '18mm', right: '18mm' },
  });

  console.log(`PDF généré : ${pdfPath}`);
} finally {
  await browser.close();
}
