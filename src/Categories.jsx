const Categories = ({categories, filterItems}) => {
  return (
    <div>
        {categories.map((category)=>{
            return <button type="button" key={category} onClick={()=>{filterItems(category)}}>{category}</button>
        })}
    </div>
  )
}
export default Categories