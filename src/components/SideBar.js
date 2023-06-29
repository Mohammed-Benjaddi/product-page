const SideBar = () => {
  return (
    <div className="menu">
      <ul>
        <ul className="block md:hidden">
          <li className="block md:hidden">Home</li>
          <li className="block md:hidden">Products</li>
          <li className="block md:hidden">About</li>
          <li className="block md:hidden">Support</li>
        </ul>
        <hr className="block md:hidden" />
        <li>Profile</li>
        <li>Favorites</li>
        <li>About</li>
        <li>Contact</li>
        <li>Product Type</li>
      </ul>
    </div>
  )
}

export default SideBar