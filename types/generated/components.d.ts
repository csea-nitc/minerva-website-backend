import type { Schema, Struct } from '@strapi/strapi';

export interface PdfPdf extends Struct.ComponentSchema {
  collectionName: 'components_pdf_pdfs';
  info: {
    description: '';
    displayName: 'pdf';
  };
  attributes: {
    Name: Schema.Attribute.String;
    pdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'pdf.pdf': PdfPdf;
    }
  }
}
