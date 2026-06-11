export interface ArchiveToolView {
  readonly root: HTMLElement;
  onShow(): void;
  onHide(): void;
  dispose(): void;
}
