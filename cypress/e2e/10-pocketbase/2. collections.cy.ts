import collectionsPage from '../../pages/collectionPage.ts';
import loginPage from '../../pages/loginPage.ts';

describe('Collections', function () {
  beforeEach(() => {
    loginPage.login('hello@fake.com', '1234567890')
  })

  it('create a new collection', () => {
    collectionsPage.createCollection({
      collectionName: 'products',
      fields: [
        { type: 'text', value: 'name' },
        { type: 'number', value: 'cost' },
      ]
    })
  })

  it('delete a collection', () => {
    collectionsPage.deleteCollection('products')
  })
});

