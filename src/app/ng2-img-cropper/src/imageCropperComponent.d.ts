import { Renderer, Type } from "@angular/core";
export declare class ImageCropperComponent extends Type {
    private cropcanvas;
    private settings;
    private image;
    private cropper;
    private onCrop;
    croppedWidth: number;
    croppedHeight: number;
    intervalRef: number;
    renderer: Renderer;
    constructor(renderer: Renderer);
    ngAfterViewInit(): void;
    onTouchMove(event: TouchEvent): void;
    onTouchStart(event: TouchEvent): void;
    onTouchEnd(event: TouchEvent): void;
    onMouseDown(): void;
    onMouseUp(): void;
    onMouseMove(event: MouseEvent): void;
    fileChangeListener($event: any): void;
    setImage(image: HTMLImageElement): void;
    private getOrientedImage(image, callback);
}
