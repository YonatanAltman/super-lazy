import {Component} from '@angular/core';
import {loadPptxLib} from "./import.pptx";
// import pptxgen from "pptxgenjs";
// lazy-loaded libraries.
declare let pptxgenjs: any;

@Component({
    selector: 'super-lazy-pptx',
    templateUrl: './pptx.component.html',
    styleUrls: ['./pptx.component.scss'],
})
export class PptxComponent {
    exportToPptx() {
        loadPptxLib().subscribe(()=>{

        // 1. Create a Presentation
        let pres = new pptxgenjs();

        // 2. Add a Slide to the presentation
        let slide = pres.addSlide();

        // 3. Add 1+ objects (Tables, Shapes, etc.) to the Slide
        slide.addText("Hello World from PptxGenJS...", {
            x: 1.5,
            y: 1.5,
            color: "363636",
            fill: {color: "F1F1F1"},
            align: pres.AlignH.center,
        });

        // 4. Save the Presentation
        pres.writeFile({fileName: "Sample Presentation.pptx"});
        })
    }
}
