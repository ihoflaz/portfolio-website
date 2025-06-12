import { mdToPdf } from 'md-to-pdf';
import fs from 'fs';
import path from 'path';

(async () => {
  console.log('CV dosyası PDF\'e dönüştürülüyor...');
  
  try {
    const cvContent = fs.readFileSync('cv.md', 'utf8');
    
    if (!fs.existsSync('public')) {
      fs.mkdirSync('public');
    }
    
    const pdf = await mdToPdf(
      { content: cvContent },
      { 
        dest: './public/cv.pdf',
        stylesheet: [
          path.join(process.cwd(), 'styles/cv-pdf.css'),
        ],
        pdf_options: {
          format: 'A4',
          margin: {
            top: '30mm',
            right: '20mm',
            bottom: '30mm',
            left: '20mm',
          },
          printBackground: true,
        },
      }
    );
    
    console.log('PDF oluşturma başarılı:', pdf.filename);
  } catch (error) {
    console.error('PDF oluşturma sırasında hata oluştu:', error);
  }
})(); 