import {ChangeDetectionStrategy, Component} from '@angular/core';
import {jsPDF} from "jspdf";

@Component({
    selector: 'super-lazy-pdf',
    templateUrl: './pdf.component.html',
    styleUrls: ['./pdf.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdfComponent {
    exportToPdf() {
// Default export is a4 paper, portrait, using millimeters for units
        const doc = new jsPDF();

        doc.text("Hello world!", 10, 10);
        doc.save("a4.pdf");
    }
}
