//Рекурсія: HTML tree

const table = {
  tagName: "table",
  attrs: {
    border: "1",
  },
  children: [
    {
      tagName: "tr",
      children: [
        {
          tagName: "td",
          children: ["1x1"],
        },
        {
          tagName: "td",
          children: ["1x2"],
        },
      ],
    },
    {
      tagName: "tr",
      children: [
        {
          tagName: "td",
          children: ["2x1"],
        },
        {
          tagName: "td",
          children: ["2x2"],
        },
      ],
    },
  ],
};

const body = {
  tagName: "body",
  children: [
    {
      tagName: "div",
      children: [
        {
          tagName: "span",
          children: ["Enter a data please:"],
        },
        {
          tagName: "br",
        },
        {
          tagName: "input",
          attrs: {
            type: "text",
            id: "name",
          },
        },
        {
          tagName: "input",
          attrs: {
            type: "text",
            id: "surname",
          },
        },
      ],
    },
    {
      tagName: "div",
      children: [
        {
          tagName: "button",
          attrs: {
            id: "ok",
          },
          children: ["OK"],
        },
        {
          tagName: "button",
          attrs: {
            id: "cancel",
          },
          children: ["Cancel"],
        },
      ],
    },
  ],
};

function htmlTree(parent) {
  let str = "";
  for (const key in parent) {
    if (key === "tagName") {
      str += "<";
      str += parent.tagName;
      if (parent.attrs) {
        for (const attr in parent.attrs) {
          str += ` ${attr}='${parent.attrs[attr]}'`
        }
      }
      str += ">";
      if (parent.children) {
        if (parent.children.length > 1) {
          for (const child of parent.children) {
            str += htmlTree(child);
          }
        } else {
          str += `'${parent.children[0]}'`;
        }
      }
      str += `</${parent.tagName}>`;
    }
  }
  return str;
}

document.write(htmlTree(table));
document.write(htmlTree(body));



// Рекурсія: DOM tree

function domTree(parent, container) {
  for (const key in parent) {
    if (key === "tagName") {
      const tagName = `${parent.tagName}`;
      const tag = document.createElement(tagName);
      if (parent.attrs) {
        for (const attr in parent.attrs) {
          const attrName = `${attr}`;
          tag[attrName] = `${parent.attrs[attr]}`;
        }
      }
      if (parent.children) {
        if (parent.children.length > 1) {
          for (const child of parent.children) {
            domTree(child, tag);
          }
        } else {
          tag.innerHTML = `'${parent.children[0]}'`;
        }
      }
      container.append(tag);
    }
  }
}

domTree(table, document.body);
domTree(body, document.body);



//Рекурсія: Deep Copy

const deepCopy = (copied) => {
  if (Array.isArray(copied)) {
    const copy = [];
    for (const element of copied) {
      if (Array.isArray(element)) {
        const copy2 = element.slice();
        copy.push(deepCopy(copy2));
      } else if (typeof element === "object" && element !== null) {
        const copy2 = {};
        for (const key in element) {
          copy2[key] = deepCopy(element[key]);
        }
        copy.push(copy2);
      } else {
        copy.push(element);
      }
    }
    return copy;
  } else if (typeof copied === "object" && copied !== null) {
    const copy = {};
    for (const element in copied) {
      if (Array.isArray(copied[element])) {
        const copy2 = copied[element].slice();
        copy[element] = deepCopy(copy2);
      } else if (typeof copied[element] === "object" && copied[element] !== null) {
        copy[element] = deepCopy(copied[element]);
      } else {
        copy[element] = copied[element];
      }
    }
    return copy;
  } else {
    return copied;
  }
};

const arr = [
  1,
  "string",
  null,
  undefined,
  { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true },
  true,
  false,
];

const arr2 = deepCopy(arr);
const table2 = deepCopy(table); 

console.log(arr2);
console.log(table2);
