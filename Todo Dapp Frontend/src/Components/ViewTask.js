import React from 'react'

const ViewTask = () => {
  return (
    <>
    <h3>Saved Tasks:</h3>
    <table class="table table-striped text-center" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
    </tr>
  </tbody>
</table>
</>
  )
}

export default ViewTask