import { useState } from "react"
import { AddCategory,GifGrid } from "./components/"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['one punch'])
  

  const onAddCategory =(newCategory)=>{
    // console.log(newCategory)
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories])
  }


  return (
    <>
   
      <div>GifExpertApp</div>
      <AddCategory 
        onNewCategory={onAddCategory}
      />

      <ol>
      {categories.map(category =>(
        <GifGrid 
          key={category}
          category={category}/>
        ))}
      </ol>
    </>
  )
}
