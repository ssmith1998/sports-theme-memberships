<template>
  <div :class="modalopen ? 'basketModal d-flex justify-content-center align-items-center basketModal--active' :'basketModal justify-content-center align-items-center'">
      <div class="card basketModalInner h-75 w-75 p-4">
          <div class="d-flex p-4 mt-3 justify-content-between align-items-center">
              <div class="basketItem__info">
                <p class="text-dark">{{membership.membership_title}}</p>
                <p class="text-dark">{{membership.membership_description}}</p>
              </div>
          </div>
        <div class="checkoutBtn"><i class="fas fa-long-arrow-alt-right"></i></div>
      </div>
  </div>
</template>

<script>
export default {
name: 'modal',
props: {
    modalopen: {
        required: true,
        default: false,
    },
    membership: {
        required: false,
        default: {}
    },
},
methods: {
    onRemoveItem() {
        
    }
},
mounted() {
    document.addEventListener('click', (event) => {
        if(event.target.classList.contains('basketModal--active')){
            this.$emit('closemodal');
        }
    })
}
}
</script>

<style lang="scss">
.basketModal {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    display: none;
}

.basketModalInner{
    position: relative;
}

.basketModal--active {
    display: flex;
}

.checkoutBtn{
   background: #3FE76A;
    border-radius: 50%;
    color: #ffffff;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    i{
        font-size: 25px;
    }
}

.item{
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 10px;
    i{
        font-size: 25px;
    }
}
</style>