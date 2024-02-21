async function checkCredentials(username, password) {
    const db = client.db('test'); // Your database name
    const collection = db.collection('users');
    
    const user = await collection.findOne({ username, password });
    return user !== null;
  }
  
  // Example usage
  const username = 'mixzapop153';
  const password = 'mixzas123';
  const isValid = await checkCredentials(username, password);
  console.log('Credentials are valid:', isValid);