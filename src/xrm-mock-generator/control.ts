import * as XrmMock from "../xrm-mock/index";
import Ui from "./ui";

export default class Control {

  public createString(components: XrmMock.IStringControlComponents): XrmMock.StringControlMock;
  public createString(attribute: XrmMock.StringAttributeMock,
                      name?: string,
                      visible?: boolean,
                      disabled?: boolean, label?: string): XrmMock.StringControlMock;
  public createString(attributeOrComponents: XrmMock.StringAttributeMock | XrmMock.IStringControlComponents,
                      name?: string,
                      visible: boolean = true,
                      disabled: boolean = false,
                      label?: string): XrmMock.StringControlMock {

    const components: XrmMock.IStringControlComponents =
      attributeOrComponents instanceof XrmMock.StringAttributeMock
      ? {
        attribute: attributeOrComponents,
        disabled,
        label: label || name,
        name,
        visible,
      }
      : attributeOrComponents;

    return this.addControl(new XrmMock.StringControlMock(components));
  }

  private addControl<T extends Xrm.Page.Control>(control: T): T {
    (Xrm.Page.ui.controls as any).push(control);
    return control;
  }
}
