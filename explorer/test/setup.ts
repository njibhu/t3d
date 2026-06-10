// jsdom does not implement layout methods; stub the ones our components call so tests
// exercise real component code without crashing on unimplemented browser APIs.
if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = (): void => {};
}
