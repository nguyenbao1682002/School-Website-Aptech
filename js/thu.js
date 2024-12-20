const product = [
  {id:1, title:"a"},
  {id:2, title:"ab"},
  {id:3, title:"ac"},
  {id:4, title:"ad"},
  {id:5, title:"af"},
  {id:6, title:"ag"},
  {id:7, title:"as"},
  {id:8, title:"af"}
]
let perPage =6;
let currentPage =1;
let start=0;
let end =perPage;
function renderProduct(){
  html ='';
  const content = product.map((item,index) => {
    html += '<div>';
    html += '<h3>'+item.title+'</h3>';
    html += '</div>';
    return html;
  })
  document.getElementById('product').innerHTML = html
}

