interface ClassNamesArgument {
  [key: string]: boolean | undefined | null;
}

type ClassNamesInput = string | ClassNamesArgument | Array<ClassNamesInput>;

const hasOwn = {}.hasOwnProperty;

export default function classNames(...args: ClassNamesInput[]): string {
  let classes = "";

  for (const arg of args) {
    if (arg) {
      classes = appendClass(classes, parseValue(arg));
    }
  }

  return classes;
}

function parseValue(arg: ClassNamesInput): string {
  if (typeof arg === "string") {
    return arg;
  }

  if (typeof arg !== "object") {
    return "";
  }

  if (Array.isArray(arg)) {
    return classNames(...arg);
  }

  if (
    arg.toString !== Object.prototype.toString &&
    !arg.toString.toString().includes("[native code]")
  ) {
    return arg.toString();
  }

  let classes = "";

  for (const key in arg) {
    if (hasOwn.call(arg, key) && arg[key]) {
      classes = appendClass(classes, key);
    }
  }

  return classes;
}

function appendClass(value: string, newClass: string): string {
  if (!newClass) {
    return value;
  }

  return value ? value + " " + newClass : newClass;
}
