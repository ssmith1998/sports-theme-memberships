<template>
  <div :class="modalopen ? 'basketModal d-flex justify-content-center align-items-center basketModal--active' :'basketModal justify-content-center align-items-center'">
      <div class="card basketModalInner h-75 w-75">
          <div class="card-top d-flex p-4 mt-3 justify-content-between align-items-center h-25">
              <div class="basketItem__info">
                <h1 class="text-dark">{{membership.membership_title}}</h1>
              </div>
          </div>
          <div class="card-body">
              <div class="description rounded bg-white mt-5">
                <p class="lead p-4">{{membership.membership_description}}</p>
              </div>
          <div v-if="membership.membership_prices" class="prices mt-5 d-flex justify-content-center ">
              <div class="priceItem mx-3" v-for="(price, index) in membership.membership_prices" :key="index" >
                <input type="radio" class="price" @click="onActivePrice" :id="price.description" :name="price.description" :value="price" v-model="pricePicked">
                <label :for="price.description" :class="index === 0 ? 'label activePrice' : 'label'"> {{price.description}}</label>
              </div>

          </div>
          </div>
          <a :href="`/membership/${membership.membership_id}?option=${pricePicked.price}`">
            <div class="checkoutBtn"><i class="fas fa-long-arrow-alt-right"></i></div>
          </a>
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
 watch: {
    modalopen(modalOpenNewVal) {
      if (modalOpenNewVal === true && this.membership.membership_prices.length) {
        this.pricePicked = this.membership.membership_prices[0];
        console.log(this.pricePicked);
      }
    }
  },
data(){
    return {
        pricePicked: ''
    }
},
methods: {
    onRemoveItem() {
        
    },
    onActivePrice(e){
        const radios = document.getElementsByClassName('price');
        for (let i = 0; i < radios.length; i++) {
            if(radios[i].nextSibling.classList.contains('activePrice') && e.target !== radios[i]){
                radios[i].nextSibling.classList.remove('activePrice');
            }else if(e.target === radios[i] && !radios[i].nextSibling.classList.contains('activePrice')){
                radios[i].nextSibling.classList.add('activePrice');
                console.log(this.pricePicked);
            }
            
            
        }
    }
},
mounted() {
    document.addEventListener('click', (event) => {
        if(event.target.classList.contains('basketModal--active')){
            this.$emit('closemodal');
        }
    });

},
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
.card-body{
    background-color: grey;
}

.card-top{
    position: relative;
    &::after{
        content: "";
        background-color: #ffffff;
        width: 100%;
        height: 20%;
        position: absolute;
        bottom: -15px;
        right: 0px;
        border-radius: 50%;
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

.priceItem{
    border-radius: 10px;
    background: #ffffff;
}

.label{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 90px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
}

.priceItem input[type=radio]{
    display: none;
}
.activePrice {
    background: green;
    color:#ffffff;
}
</style>