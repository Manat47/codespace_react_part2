import React, { useState,useEffect} from 'react'; // แก้การนำเข้า useState

function Item({ name, isPacked = false }) {
  return (
    <li>
      {name} {isPacked && '✔️'}
    </li>
  );
}

export default function ItemList() {
  const [keyword, setKeyword] = useState(''); // เพิ่ม useState สำหรับจัดการ keyword
  useEffect(()=>{
    console.log("this component is loaded!!!");

    return()=>{
        alert("component unloaded!!!");
    }
  },[]);
  const items = [
    { name: "sunglass", isPacked: false },
    { name: "sunblock", isPacked: true },
    { name: "swimming suit", isPacked: true },
    { name: "towel", isPacked: true },
    { name: "Power bank", isPacked: true },
  ];

  const itemList = items.map((i) => (
    <Item key={i.name} name={i.name} isPacked={i.isPacked} />
  ));

  // Filtering items where name includes keyword
  const filterList = items.filter((i) => i.name.toLowerCase().includes(keyword.toLowerCase()));
  const filteredItemList = filterList.map((i) => (
    <Item key={i.name} name={i.name} isPacked={i.isPacked} />
  ));

  return (
    <>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search items..."
      />
      <ul>
        {itemList}
        <hr />
        <h2>Filtered Items:</h2>
        {filteredItemList}
      </ul>
    </>
  );
}
