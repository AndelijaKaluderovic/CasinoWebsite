export default function CategoryCard({ categories }) {
  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className="category item">
          <div className="content">
            <div className="header">{category.name}</div>
          </div>
        </div>
      ))}
    </>
  );
}
