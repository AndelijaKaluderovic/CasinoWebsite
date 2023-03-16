export default function CategoryCard({ categories, handleCategories }) {
  return (
    <>
      {categories.map((category) => (
        <div key={category.name} className="category item">
          <div
            className="content"
            onClick={() => handleCategories(category.id)}
          >
            <header className="header">{category.name}</header>
          </div>
        </div>
      ))}
    </>
  );
}
