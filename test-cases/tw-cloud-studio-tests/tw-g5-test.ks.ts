import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "0d78a370-976e-41d8-b9ce-40c990d7acf4",
    attributes: {
      id: "btn-make-appointment",
      href: "./profile.php#login",
      class: "btn btn-dark btn-lg",
    },
    childIndex: 4,
    hashes: { "md5.v1": "3caec008087ccb7a1cb3fc698fbf83c2" },
    name: "a - Make Appointment",
    selectors: [
      {
        id: "0d199c8b-1eb5-47ec-a36a-71fc4e3e824a",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "50a072ee-c2cc-455d-9895-6532f7b46068",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Make Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "2c50767a-553e-4107-9bc6-c82d9309acdb",
    attributes: {
      type: "text",
      class: "form-control",
      id: "txt-username",
      name: "username",
      placeholder: "Username",
      value: "",
      autocomplete: "off",
    },
    childIndex: 1,
    hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
    name: "input - Username",
    selectors: [
      {
        id: "58321539-c048-4d1d-92a8-5e6d439f467d",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "d60f88f3-4b9e-48c1-a724-22617f75bcd8",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.setText(
    {
      type: "Web",
      id: "2c50767a-553e-4107-9bc6-c82d9309acdb",
      attributes: {
        type: "text",
        class: "form-control",
        id: "txt-username",
        name: "username",
        placeholder: "Username",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
      name: "input - Username",
      selectors: [
        {
          id: "58321539-c048-4d1d-92a8-5e6d439f467d",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "d60f88f3-4b9e-48c1-a724-22617f75bcd8",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "John Doe"
  );
  await web.setEncryptedText(
    {
      type: "Web",
      id: "72c8305c-5238-4b0d-8cda-dec6e1e021d9",
      attributes: {
        type: "password",
        class: "form-control",
        id: "txt-password",
        name: "password",
        placeholder: "Password",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "fe634c654141065106a978262a410740" },
      name: "input - Password",
      selectors: [
        {
          id: "e21c90a2-2999-4126-9526-d649add11efe",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "d07c0644-343d-4bdc-86ed-c38119463342",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "f0aac9471a98a6d81f0d41c03ff4bba7-U2FsdGVkX19xNXzUZNpb5gI+27R3WcVz6P+VJXhXvlaQnZInhQdeQh6Hn0fUONhm"
  );
  await web.click({
    type: "Web",
    id: "6b7799ed-b48a-4cd8-948d-9b3b61b971da",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: { "md5.v1": "50aa64147a00037c420def1e18673ac9" },
    name: "button - Login",
    selectors: [
      {
        id: "8445e625-c8cf-4359-97b8-dc22ec23f316",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "c12acaf4-51ea-41e9-8627-c35a5c842e16",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Login",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "06704123-9ae8-48b0-b7ca-bb58e2c3ca8a",
    attributes: {
      type: "text",
      class: "form-control",
      id: "txt_visit_date",
      name: "visit_date",
      placeholder: "dd/mm/yyyy",
      autocomplete: "off",
      required: "",
    },
    childIndex: 1,
    hashes: { "md5.v1": "055cc9a2ee5ca19d0a879ebe370aa30e" },
    name: "input - dd/mm/yyyy",
    selectors: [
      {
        id: "b85bd9f9-fcb4-4c87-b0d0-6abc2e602a80",
        type: "CSS",
        value: "#txt_visit_date",
        isDefault: true,
      },
      {
        id: "f1cc800e-6391-4167-afdd-a4d86fd135ac",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "3a6357df-31d6-4d85-8e2f-b26b75bd17eb",
    attributes: { class: "day" },
    childIndex: 2,
    hashes: { "md5.v1": "7b081d928af41a017fa795f3878b6479" },
    name: "td - 15",
    selectors: [
      {
        id: "3f533ca5-7fdb-4a52-a652-b1de8bec061f",
        type: "CSS",
        value: "tr:nth-child(3) .day:nth-child(2)",
        isDefault: true,
      },
      {
        id: "145867fa-cb62-4188-812b-a84a3c1d8412",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "td",
    text: "15",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "60ff5370-0bc2-4902-916a-4191196eda62",
    attributes: {
      class: "form-control",
      id: "txt_comment",
      name: "comment",
      placeholder: "Comment",
      rows: "10",
    },
    childIndex: 1,
    hashes: { "md5.v1": "b06c3c43a662648630c6cc9a9b0663f1" },
    name: "textarea - Comment",
    selectors: [
      {
        id: "e15f23fc-e474-4a0c-ba61-3553ce3d3e40",
        type: "CSS",
        value: "#txt_comment",
        isDefault: true,
      },
      {
        id: "9c139fd9-0d9f-4a0a-84e3-47da83a8f034",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "textarea",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "5ca06ad4-60fd-4152-af3b-034de4d9647a",
    attributes: {
      id: "btn-book-appointment",
      type: "submit",
      class: "btn btn-default",
    },
    childIndex: 1,
    hashes: { "md5.v1": "56ef00cb92ad0547b9464c968fd02681" },
    name: "button - Book Appointment",
    selectors: [
      {
        id: "ada9fd8d-6c57-476a-ade9-ca7c773e8c8c",
        type: "CSS",
        value: "#btn-book-appointment",
        isDefault: true,
      },
      {
        id: "5e262aa2-dec6-433f-8baf-7ba3d8a6e116",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Book Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "a4963de6-7ffd-46e5-a3b1-3be848ba7078",
    attributes: {
      class: "btn btn-default",
      href: "https://katalon-demo-cura.herokuapp.com/",
    },
    childIndex: 1,
    hashes: { "md5.v1": "706652890bf1fc29e80d791a1c2f601a" },
    name: "a - Go to Homepage",
    selectors: [
      {
        id: "a69c9a16-a78d-4ef0-8886-284ca23ff150",
        type: "CSS",
        value: ".btn.btn-default",
        isDefault: true,
      },
      {
        id: "fc0da4fa-cba3-4eaf-9b3a-78b5994ffb9f",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Go to Homepage",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/appointment.php#summary",
    parentIframe: null,
    shadowRoot: null,
  });
});