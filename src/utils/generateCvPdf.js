import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function generateCvPdf() {
  const source = document.getElementById('cv-source');
  if (!source) return;
  // Ensure temporarily visible for accurate rendering
  source.style.display = 'block';
  const canvas = await html2canvas(source, { scale: 2, backgroundColor: '#ffffff' });
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const imgProps = { width: canvas.width, height: canvas.height };
  const ratio = Math.min(pageWidth / imgProps.width, pageHeight / imgProps.height);
  const w = imgProps.width * ratio;
  const h = imgProps.height * ratio;
  pdf.addImage(imgData, 'PNG', (pageWidth - w) / 2, 10, w, h);
  pdf.save('Iniyan-SK-CV.pdf');
  source.style.display = 'none';
}