import{h as f,S as d,u as x,J as y,j as l,k as e,t as c,N as v,V as g,o as a}from"./vendor-DOs60vln.js";const b={class:"flex flex-col h-screen"},h={class:"bg-gray-100 border-b px-4 py-2 flex justify-between items-center"},_={class:"text-lg font-semibold"},w={class:"flex flex-1"},E={class:"w-1/2 border-r border-gray-300 flex flex-col"},k={class:"w-1/2 flex flex-col"},j={class:"flex-1 p-4 bg-white overflow-auto"},T=["srcdoc"],C={key:1,class:"h-full flex items-center justify-center text-gray-500"},H={class:"text-center"},O={class:"mb-2"},D={__name:"TryItEditor",setup(U){const r=x(),o=f(""),n=d(()=>{const s=r.params.lang;return s==="javascript"?"JavaScript":s==="python"?"Python":s?.charAt(0).toUpperCase()+s?.slice(1)||"Unknown"}),u=d(()=>r.params.lang==="javascript"),p=()=>r.params.lang==="javascript"?`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Output</title>
        <style>
          body { font-family: system-ui; padding: 20px; }
        </style>
      </head>
      <body>
        <script>
          try {
            ${o.value}
          } catch (error) {
            document.body.innerHTML = '<div style="color: red;">Error: ' + error.message + '</div>'
          }
        <\/script>
      </body>
      </html>
    `:"<div>Unsupported language</div>",i=()=>{r.query.example==="py1"?o.value='print("Hello, World!")':o.value='console.log("Hello, World!")'};return y(()=>{i()}),(s,t)=>(a(),l("div",b,[e("div",h,[e("h2",_,"Try It Editor - "+c(n.value),1),e("button",{onClick:i,class:"px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"}," Reset ")]),e("div",w,[e("div",E,[t[1]||(t[1]=e("div",{class:"bg-gray-50 px-4 py-2 border-b text-sm font-medium"},"Editor",-1)),v(e("textarea",{"onUpdate:modelValue":t[0]||(t[0]=m=>o.value=m),class:"flex-1 w-full p-4 font-mono text-sm resize-none focus:outline-none",placeholder:"Write your code here..."},null,512),[[g,o.value]])]),e("div",k,[t[3]||(t[3]=e("div",{class:"bg-gray-50 px-4 py-2 border-b text-sm font-medium"},"Output",-1)),e("div",j,[u.value?(a(),l("iframe",{key:0,class:"w-full h-full border-0",srcdoc:p(),sandbox:"allow-scripts allow-same-origin"},null,8,T)):(a(),l("div",C,[e("div",H,[e("p",O,"Execution not supported for "+c(n.value)+" yet",1),t[2]||(t[2]=e("p",{class:"text-sm"},"(coming soon)",-1))])]))])])])]))}};export{D as default};
