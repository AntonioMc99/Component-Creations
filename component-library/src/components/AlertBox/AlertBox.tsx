<AlertBox
  type="info"
  message="User and product loaded successfully!"
  onClose={() => alert('Alert closed')}
>
  <UserProfileCard
    user={{
      id: '1',
      name: 'Antonio McBride',
      email: 'Ant@example.com',
      role: 'Admin',
      avatarUrl: ''
    }}
    onEdit={(id) => console.log('Edit user', id)}
  >
    <ProductDisplay
      product={{
        id: '101',
        name: 'AirForce',
        price: 100,
        description: 'Atlanta Staple Shoe',
        inStock: true,
        imageUrl: ''
      }}
      onAddToCart={(id) => console.log('Add to cart', id)}
    />
  </UserProfileCard>
</AlertBox.tsx>