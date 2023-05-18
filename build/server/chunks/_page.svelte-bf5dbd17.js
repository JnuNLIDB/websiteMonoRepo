import { c as create_ssr_component, a as subscribe, v as validate_component, l as each, e as escape, d as compute_rest_props, g as get_current_component, j as getContext, m as missing_component, f as spread, h as escape_attribute_value, i as escape_object, b as add_attribute, s as setContext, o as onDestroy, n as set_store_value, k as globals } from './index3-75d1bdbb.js';
import { c as classAdderBuilder, B as Button, C as CommonLabel, P as Paper, f as forwardEventsBuilder, b as classMap, R as Ripple, S as SmuiElement } from './Button-5aeafd7c.js';
import { w as writable } from './index2-d3763b6a.js';
import 'js-sha256';
import { p as page } from './stores-39db615e.js';

function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf("$");
    if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }
  return newObj;
}
function prefixFilter(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }
  return newObj;
}
const CommonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "on", "component", "tag", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { on = false } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "i" : void 0 } = $$props;
  const svg = component === Svg;
  const context = getContext("SMUI:icon:context");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-button__icon": context === "button",
            "mdc-fab__icon": context === "fab",
            "mdc-icon-button__icon": context === "icon-button",
            "mdc-icon-button__icon--on": context === "icon-button" && on,
            "mdc-tab__icon": context === "tab",
            "mdc-banner__icon": context === "banner",
            "mdc-segmented-button__icon": context === "segmented-button"
          })
        },
        { "aria-hidden": "true" },
        svg ? { focusable: "false", tabindex: "-1" } : {},
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<svg${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</svg>`;
});
classAdderBuilder({
  class: "mdc-text-field-helper-line",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
});
classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "emptyValueNull",
    "emptyValueUndefined",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { type = "text" } = $$props;
  let { placeholder = " " } = $$props;
  let { value = uninitializedValue } = $$props;
  const valueUninitialized = isUninitializedValue(value);
  if (valueUninitialized) {
    value = "";
  }
  let { files = null } = $$props;
  let { dirty = false } = $$props;
  let { invalid = false } = $$props;
  let { updateInvalid = true } = $$props;
  let { emptyValueNull = value === null } = $$props;
  if (valueUninitialized && emptyValueNull) {
    value = null;
  }
  let { emptyValueUndefined = value === void 0 } = $$props;
  if (valueUninitialized && emptyValueUndefined) {
    value = void 0;
  }
  let element;
  let internalAttrs = {};
  let valueProp = {};
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value2) {
    if (internalAttrs[name] !== value2) {
      internalAttrs[name] = value2;
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = void 0;
    }
  }
  function focus() {
    getElement().focus();
  }
  function blur() {
    getElement().blur();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
    $$bindings.dirty(dirty);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.updateInvalid === void 0 && $$bindings.updateInvalid && updateInvalid !== void 0)
    $$bindings.updateInvalid(updateInvalid);
  if ($$props.emptyValueNull === void 0 && $$bindings.emptyValueNull && emptyValueNull !== void 0)
    $$bindings.emptyValueNull(emptyValueNull);
  if ($$props.emptyValueUndefined === void 0 && $$bindings.emptyValueUndefined && emptyValueUndefined !== void 0)
    $$bindings.emptyValueUndefined(emptyValueUndefined);
  if ($$props.getAttr === void 0 && $$bindings.getAttr && getAttr !== void 0)
    $$bindings.getAttr(getAttr);
  if ($$props.addAttr === void 0 && $$bindings.addAttr && addAttr !== void 0)
    $$bindings.addAttr(addAttr);
  if ($$props.removeAttr === void 0 && $$bindings.removeAttr && removeAttr !== void 0)
    $$bindings.removeAttr(removeAttr);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (type === "file") {
      delete valueProp.value;
      valueProp = valueProp;
    } else {
      valueProp.value = value == null ? "" : value;
    }
  }
  return `<input${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-text-field__input": true
        }))
      },
      { type: escape_attribute_value(type) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      escape_object(valueProp),
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>`;
});
const { Object: Object_1 } = globals;
const Fab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "focusRing",
    "color",
    "mini",
    "exited",
    "extended",
    "touch",
    "href",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { focusRing = false } = $$props;
  let { color = "secondary" } = $$props;
  let { mini = false } = $$props;
  let { exited = false } = $$props;
  let { extended = false } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? href == null ? "button" : "a" : void 0 } = $$props;
  setContext("SMUI:label:context", "fab");
  setContext("SMUI:icon:context", "fab");
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.focusRing === void 0 && $$bindings.focusRing && focusRing !== void 0)
    $$bindings.focusRing(focusRing);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.mini === void 0 && $$bindings.mini && mini !== void 0)
    $$bindings.mini(mini);
  if ($$props.exited === void 0 && $$bindings.exited && exited !== void 0)
    $$bindings.exited(exited);
  if ($$props.extended === void 0 && $$bindings.extended && extended !== void 0)
    $$bindings.extended(extended);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1.assign(
        {},
        { tag },
        {
          use: [
            [
              Ripple,
              {
                ripple,
                unbounded: false,
                color,
                disabled: !!$$restProps.disabled,
                addClass,
                removeClass,
                addStyle
              }
            ],
            forwardEvents,
            ...use
          ]
        },
        {
          class: classMap({
            [className]: true,
            "mdc-fab": true,
            "mdc-fab--mini": mini,
            "mdc-fab--exited": exited,
            "mdc-fab--extended": extended,
            "smui-fab--color-primary": color === "primary",
            "mdc-fab--touch": touch,
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        { href },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="mdc-fab__ripple"></div>
  ${focusRing ? `<div class="mdc-fab__focus-ring"></div>` : ``}
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="mdc-fab__touch"></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "open",
    "selection",
    "escapeKeyAction",
    "scrimClickAction",
    "autoStackButtons",
    "fullscreen",
    "sheet",
    "noContentPadding",
    "container$class",
    "surface$class",
    "isOpen",
    "setOpen",
    "layout",
    "getElement"
  ]);
  let $aboveFullscreenShown, $$unsubscribe_aboveFullscreenShown;
  let $actionButtonsReversed, $$unsubscribe_actionButtonsReversed;
  var _a;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { open = false } = $$props;
  let { selection = false } = $$props;
  let { escapeKeyAction = "close" } = $$props;
  let { scrimClickAction = "close" } = $$props;
  let { autoStackButtons = true } = $$props;
  let { fullscreen = false } = $$props;
  let { sheet = false } = $$props;
  let { noContentPadding = false } = $$props;
  let { container$class = "" } = $$props;
  let { surface$class = "" } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let actionButtonsReversed = writable(false);
  $$unsubscribe_actionButtonsReversed = subscribe(actionButtonsReversed, (value) => $actionButtonsReversed = value);
  let aboveFullscreen = getContext("SMUI:dialog:aboveFullscreen");
  let aboveFullscreenShown = (_a = getContext("SMUI:dialog:aboveFullscreenShown")) !== null && _a !== void 0 ? _a : writable(false);
  $$unsubscribe_aboveFullscreenShown = subscribe(aboveFullscreenShown, (value) => $aboveFullscreenShown = value);
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let addLayoutListenerFn = (listener) => {
    return () => {
    };
  };
  setContext("SMUI:dialog:actions:reversed", actionButtonsReversed);
  setContext("SMUI:addLayoutListener", addLayoutListenerFn);
  setContext("SMUI:dialog:selection", selection);
  setContext("SMUI:dialog:aboveFullscreen", aboveFullscreen || fullscreen);
  setContext("SMUI:dialog:aboveFullscreenShown", aboveFullscreenShown);
  if (sheet) {
    setContext("SMUI:icon-button:context", "dialog:sheet");
  }
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  let previousAboveFullscreenShown = $aboveFullscreenShown;
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function layout() {
    return instance.layout();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.selection === void 0 && $$bindings.selection && selection !== void 0)
    $$bindings.selection(selection);
  if ($$props.escapeKeyAction === void 0 && $$bindings.escapeKeyAction && escapeKeyAction !== void 0)
    $$bindings.escapeKeyAction(escapeKeyAction);
  if ($$props.scrimClickAction === void 0 && $$bindings.scrimClickAction && scrimClickAction !== void 0)
    $$bindings.scrimClickAction(scrimClickAction);
  if ($$props.autoStackButtons === void 0 && $$bindings.autoStackButtons && autoStackButtons !== void 0)
    $$bindings.autoStackButtons(autoStackButtons);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.sheet === void 0 && $$bindings.sheet && sheet !== void 0)
    $$bindings.sheet(sheet);
  if ($$props.noContentPadding === void 0 && $$bindings.noContentPadding && noContentPadding !== void 0)
    $$bindings.noContentPadding(noContentPadding);
  if ($$props.container$class === void 0 && $$bindings.container$class && container$class !== void 0)
    $$bindings.container$class(container$class);
  if ($$props.surface$class === void 0 && $$bindings.surface$class && surface$class !== void 0)
    $$bindings.surface$class(surface$class);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (!autoStackButtons) {
      set_store_value(actionButtonsReversed, $actionButtonsReversed = true, $actionButtonsReversed);
    }
  }
  {
    if (fullscreen && instance && previousAboveFullscreenShown !== $aboveFullscreenShown) {
      previousAboveFullscreenShown = $aboveFullscreenShown;
      if ($aboveFullscreenShown) {
        instance.showSurfaceScrim();
      } else {
        instance.hideSurfaceScrim();
      }
    }
  }
  $$unsubscribe_aboveFullscreenShown();
  $$unsubscribe_actionButtonsReversed();
  return `


<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-dialog": true,
          "mdc-dialog--stacked": !autoStackButtons,
          "mdc-dialog--fullscreen": fullscreen,
          "mdc-dialog--sheet": sheet,
          "mdc-dialog--no-content-padding": noContentPadding,
          "smui-dialog--selection": selection,
          ...internalClasses
        }))
      },
      { role: "alertdialog" },
      { "aria-modal": "true" },
      escape_object(exclude($$restProps, ["container$", "surface$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [container$class]: true,
          "mdc-dialog__container": true
        }))
      },
      escape_object(prefixFilter($$restProps, "container$"))
    ],
    {}
  )}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [surface$class]: true,
          "mdc-dialog__surface": true
        }))
      },
      { role: "alertdialog" },
      { "aria-modal": "true" },
      escape_object(prefixFilter($$restProps, "surface$"))
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}
      ${fullscreen ? `<div class="mdc-dialog__surface-scrim"></div>` : ``}</div></div>
  <div class="mdc-dialog__scrim"></div></div>

${slots.over ? slots.over({}) : ``}`;
});
classAdderBuilder({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
const Title = classAdderBuilder({
  class: "mdc-dialog__title",
  tag: "h2"
});
const Content = classAdderBuilder({
  class: "mdc-dialog__content",
  tag: "div"
});
const Actions = classAdderBuilder({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
function InitialFocus(node) {
  node.setAttribute("data-mdc-dialog-initial-focus", "");
  return {
    destroy() {
      node.removeAttribute("data-mdc-dialog-initial-focus");
    }
  };
}
const CircularProgress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "indeterminate", "closed", "progress", "fourColor", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { indeterminate = false } = $$props;
  let { closed = false } = $$props;
  let { progress = 0 } = $$props;
  let { fourColor = false } = $$props;
  let element;
  let internalClasses = {};
  let internalAttrs = {};
  let determinateCircleAttrs = {};
  let determinateCircle;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.closed === void 0 && $$bindings.closed && closed !== void 0)
    $$bindings.closed(closed);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.fourColor === void 0 && $$bindings.fourColor && fourColor !== void 0)
    $$bindings.fourColor(fourColor);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-circular-progress": true,
          "mdc-circular-progress--indeterminate": indeterminate,
          "mdc-circular-progress--closed": closed,
          ...internalClasses
        }))
      },
      { role: "progressbar" },
      {
        "aria-valuemin": escape_attribute_value(0)
      },
      {
        "aria-valuemax": escape_attribute_value(1)
      },
      {
        "aria-valuenow": escape_attribute_value(indeterminate ? void 0 : progress)
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}><div class="mdc-circular-progress__determinate-container"><svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle class="mdc-circular-progress__determinate-track" cx="24" cy="24" r="18" stroke-width="4"></circle><circle${spread(
    [
      {
        class: "mdc-circular-progress__determinate-circle"
      },
      { cx: "24" },
      { cy: "24" },
      { r: "18" },
      { "stroke-dasharray": "113.097" },
      { "stroke-dashoffset": "113.097" },
      { "stroke-width": "4" },
      escape_object(determinateCircleAttrs)
    ],
    {}
  )}${add_attribute("this", determinateCircle, 0)}></circle></svg></div>
  <div class="mdc-circular-progress__indeterminate-container">${each(fourColor ? [1, 2, 3, 4] : [1], (color) => {
    return `<div${add_attribute(
      "class",
      classMap({
        [className]: true,
        "mdc-circular-progress__spinner-layer": true,
        ["mdc-circular-progress__color-" + color]: fourColor
      }),
      0
    )}><div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"><svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"></circle></svg></div>
        <div class="mdc-circular-progress__gap-patch"><svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="3.2"></circle></svg></div>
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"><svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"></circle></svg></div>
      </div>`;
  })}</div>
</div>`;
});
const css = {
  code: ".chat-container.svelte-mmvbqj{display:flex;flex:1 1 auto;min-width:0;min-height:0;flex-direction:column;height:99%}.display-container.svelte-mmvbqj{display:flex;flex:1 1 auto;flex-direction:column;justify-content:flex-start;min-width:0;min-height:0;z-index:0;outline:0;overflow:scroll;overflow-x:hidden}.solo-container.svelte-mmvbqj{padding-top:24px;display:flex;justify-content:center;align-items:center}.chat-log.svelte-mmvbqj{display:flex;justify-content:center;align-items:center;margin:12px 0}.svelte-mmvbqj .solo-paper{display:flex;align-items:center;flex-grow:1;max-width:600px;margin:0 12px;padding:12px 12px}.svelte-mmvbqj .solo-paper > *{display:inline-block;margin:0 12px}.solo-input.svelte-mmvbqj{flex-grow:1;color:var(--mdc-theme-on-surface, #fff);white-space:pre-line}.solo-input.svelte-mmvbqj::placeholder{color:var(--mdc-theme-on-surface, #fff);opacity:0.6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value2) => value2);
  let open = false;
  let processing = false;
  let qas = [];
  qas.push({
    question: "What is the meaning of life?",
    answer: "42"
  });
  let value = "";
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Dialog, "Dialog").$$render(
      $$result,
      {
        "aria-describedby": "default-focus-content",
        "aria-labelledby": "default-focus-title",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Title, "Title").$$render($$result, { id: "default-focus-title" }, {}, {
            default: () => {
              return `模型选择`;
            }
          })}
	${validate_component(Content, "Content").$$render($$result, { id: "default-focus-content" }, {}, {
            default: () => {
              return `选择你要使用的模型`;
            }
          })}
	${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, { defaultAction: true, use: [InitialFocus] }, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `GPT-3.5`;
                    }
                  })}`;
                }
              })}
		${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `GLM`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}

<div class="chat-container svelte-mmvbqj"><div class="display-container svelte-mmvbqj"><div class="svelte-mmvbqj">${each(qas, ({ question, answer }) => {
      return `<div class="chat-log svelte-mmvbqj">${validate_component(Paper, "Paper").$$render($$result, { class: "solo-paper", elevation: 6 }, {}, {
        default: () => {
          return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `person`;
            }
          })}
						<div class="solo-input svelte-mmvbqj">${escape(question)}</div>
					`;
        }
      })}</div>
				<div class="chat-log svelte-mmvbqj">${validate_component(Paper, "Paper").$$render($$result, { class: "solo-paper", elevation: 6 }, {}, {
        default: () => {
          return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `smart_toy`;
            }
          })}
						${answer === "" ? `${validate_component(CircularProgress, "CircularProgress").$$render(
            $$result,
            {
              style: "height: 19px; width: 19px;",
              indeterminate: true
            },
            {},
            {}
          )}` : `<div class="solo-input svelte-mmvbqj">${escape(answer)}</div>`}
					`;
        }
      })}
				</div>`;
    })}</div></div>
	<div class="solo-container svelte-mmvbqj">${validate_component(Paper, "Paper").$$render($$result, { class: "solo-paper", elevation: 6 }, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `person`;
          }
        })}
			${validate_component(Input, "Input").$$render(
          $$result,
          {
            class: "solo-input",
            disabled: processing,
            placeholder: "Ask The Database",
            value
          },
          {
            value: ($$value) => {
              value = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}
		${validate_component(Fab, "Fab").$$render(
      $$result,
      {
        class: "solo-fab",
        color: "primary",
        mini: true
      },
      {},
      {
        default: () => {
          return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `settings`;
            }
          })}`;
        }
      }
    )}
		${validate_component(Fab, "Fab").$$render(
      $$result,
      {
        class: "solo-fab",
        color: "primary",
        disabled: value === "" || processing,
        mini: true
      },
      {},
      {
        default: () => {
          return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `arrow_forward`;
            }
          })}`;
        }
      }
    )}</div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-bf5dbd17.js.map
