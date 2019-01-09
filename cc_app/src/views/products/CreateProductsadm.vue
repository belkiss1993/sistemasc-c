<template>
  <form>
    <div class="form-group">
      <label for="exampleInputProduct">Nombre de Producto</label>
      <input
        type="Product"
        class="form-control"
        id="Product"
        aria-describedby="Product"
        placeholder="Product"
      >
    </div>
    <div class="form-group">
      <label for="exampleInputdescripción">Descripción de producto</label>
      <input
        type="descripción"
        class="form-control"
        id="ProductDescription"
        placeholder="Product Description"
      >
    </div>
    <div class="form-group">
      <label for="exampleInputModel">Modelo</label>
      <input type="Model" class="form-control" id="Model" placeholder="Model">
    </div>
    <div class="form-group">
      <label for="exampleFormControlType">Tipo de Producto</label>
      <select class="form-control" id="Product Type">
        <option></option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSegment">Tipo de Segmento</label>
      <select class="form-control" id="Segment Type">
        <option></option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
