//𝕲𝖊𝖙
async function getData() {
    const response = await fetch("http://localhost:3000/api/task");
    const data = await response.json();
    console.log(data);
    return data;
  }
  
  //𝓟𝓸𝓼𝓽
  async function post(task) {
    const response = await fetch("http://localhost:3000/api/task", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const postedTask = await response.json();
    return postedTask;
  }
  
  //𝕯𝖊𝖑𝖊𝖙𝖊
  async function deleteData(task_id) {
    const response = await fetch("http://localhost:3000/api/task/" + task_id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const deleteTask = await response.json();
    return deleteTask;
  }

   async function getDat() {
    try {
      const response = await fetch("http://localhost:3000/api/task/");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

export { post, deleteData, getData, getDat};