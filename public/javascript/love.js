async function loveClickHandler(event) {
    event.preventDefault();
    console.log("hello")
    let id = event.target.getAttribute("post_id");
  
    const response = await fetch('/api/posts/uplove', {
      method: 'PUT',
      body: JSON.stringify({
        post_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
      alert("I love it too")
    } else {
      alert("You already loved this test");
    }
  }
  
  document.querySelectorAll('.love-btn').forEach(item => {
    item.addEventListener('click', loveClickHandler)
  }); 
  