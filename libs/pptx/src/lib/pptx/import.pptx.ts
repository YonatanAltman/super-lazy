import {Observable, tap,from} from "rxjs";



export function loadPptxLib(): Observable<any> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return from(import('pptxgenjs'))
        .pipe(
            tap((lib: any) => {
                console.log('PPTX is here');
            }))
}
