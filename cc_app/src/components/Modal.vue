<template>
    <div class="modal" tabindex="-1" role="dialog" :id="id">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{titulo}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <slot name="contenido"></slot>
            </div>
            <div class="modal-footer" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['titulo', 'id']
}
</script>
