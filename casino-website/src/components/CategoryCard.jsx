export default function CategoryCard({ categories, handleCategories }) {
  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className="category item">
          <div className="content">
            <div
              className="header"
              onClick={() => handleCategories(category.id)}
            >
              {category.name}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
