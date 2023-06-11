export class Print {
  static printText (elementId: string, text: string) {
    const element = document.getElementById(elementId);

    if (element) {
      element.innerText = text;
    }
  }
}