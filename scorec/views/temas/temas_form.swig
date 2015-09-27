{% extends '../base.swig' %}

{% block styles %}

{% endblock styles %}

{% block sidebar_menu %}
	{% include './sidebar_menu.swig' %}
{% endblock sidebar_menu %}

{% block main_content %}

	<div class="row">
	  <!-- left column -->
	  <div class="col-md-12">
	    <!-- general form elements -->
	    <div class="box box-primary">
	      <div class="box-header">
	        <h3 class="box-title">Agregar tema</h3>
	      </div><!-- /.box-header -->
	      <!-- form start -->
	      <form role="form" method="post">
	        <div class="box-body">
	          <!-- text input -->
	          <div class="form-group">
	            <label>Nombre del Tema</label>
	            <input type="text" id="tema" name="nombre" class="form-control" placeholder="Ej. TEMA SOBRE REDES SOCIALES"/>
	          </div>

	          <!-- textarea input -->
	          <div class="form-group">
	            <label>Descripción del Tema</label>
	            <textarea id="description" name="descripcion" class="form-control" placeholder="Ej. EL TEMA TRATA SOBRE LAS ADICCIONES EN LOS ADOLECENTES EN LAS REDES SOCIALES." rows="4"></textarea>
	          </div>
	        </div><!-- /.box-body -->

	        <div class="box-footer">
	          <button id="btnSave" type="submit" class="btn btn-primary">Guardar</button>
	        </div>
	      </form>
	    </div><!-- /.box -->

	  </div><!--/.col (left) -->
	</div>   <!-- /.row -->

{% endblock main_content %}

{% block scripts %}
	<script src="/js/tema/dist/index.min.js"></script>
	<!-- Page script -->
	<script type="text/javascript">
	  $(function () {
	  	$('#tema').focus()
	  })
	</script>

{% endblock scripts %}