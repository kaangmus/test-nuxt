<template>
  <div class="c-body">
      <main class="c-main">
        <div class="container-fluid">
          <div class="row">
            <div class="col-3"></div>
            <div class="col">
              <form @keydown="debug">
               <!--  <div class="form-group">
                  <label for="exampleFormControlTextarea1">Please enter JSON Format</label>
                  <textarea v-model="jsons" name="json"  rows="5" style="height:100%;" class="form-control" id="exampleFormControlTextarea1" ></textarea>
                </div> -->
                <div class="form-group">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"> {{ jsons }}</textarea>
                </div>
              </form> 
            </div>
            <div class="col-3"></div>
          </div>
          <div class="row">
            <div class="col-3"></div>
              <div class="col">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="#">InsureDIY</a></li>
                      <li class="breadcrumb-item"><a href="#">Profile</a></li>
                      <li class="breadcrumb-item active" aria-current="page">{{ form.title }}</li>
                    </ol>
                  </nav>
                  <form>
                  <div>
                    <div class="form-group" v-for="field in form.fields">
                      <label for="exampleFormControlSelect1">{{ field.attributes.label }}</label>
                      <input v-if="field.type === 'field-input'" :value="field.attributes.default_value" :name="field.attributes.name" type="email" class="form-control" id="exampleFormControlInput1" :placeholder="field.attributes.placeholder">
                      <select v-if="field.type === 'select-input'"  :name="field.attributes.name"  class="form-control" id="exampleFormControlSelect1">
                        <option v-if="field.attributes.first_selection">{{ field.attributes.first_selection }}</option>
                        <option v-if="field.type === 'select-input'">{{ field.attributes.options }}</option>
                      </select>
                      <div v-if="field.type === 'html-static'" v-html="field.attributes.content">
                      </div>
                    </div>
                  </div>
                  <button  @click="changeTab(step--)" type="button" class="btn btn-primary btn-lg align-left">Previus </button>
                  <button  @click="changeTab(step++)" type="button" class="btn btn-secondary btn-lg align-right">Next</button>
                </form>  
              </div>
            <div class="col-3"></div>
          </div>
        </div>   
      </main>
  </div>
</template>
<script>
  export default {
    head() {
      return {
        title: 'InsureDIY | Assement Developer',
      }
    },

    data() {
      return {
          jsons : [
            {
                "title": "Personal Details",
                "fields": [
                    {
                        "type": "field-input",
                        "attributes": {
                            "layout": "6",
                            "label": "Email Address",
                            "placeholder": 'masukkan email',
                            "name": "email",
                            "default_value": 'Hello@musliadi.com'
                        }
                    },
                    {
                        "type": "field-input",
                        "attributes": {
                            "layout": "6",
                            "label": "Handphone No. (8 digit of your phone no)",
                            "placeholder": null,
                            "name": "handphoneNo",
                            "default_value": null
                        }
                    }
                ]
            },
            {
                "title": "Investment Details",
                "fields": [
                    {
                        "type": "select-input",
                        "attributes": {
                            "multiple": "No",
                            "options": "S$50,000\nS$60,000\nS$70,000\nS$80,000\nS$90,000\nS$100,000\nS$110,000\nS$120,000\nS$130,000\nS$140,000\nS$150,000\nS$160,000\nS$170,000\nS$180,000\nS$190,000\nS$200,000\nS$210,000\nS$220,000\nS$230,000\nS$240,000\nS$250,000\nS$260,000\nS$270,000\nS$280,000\nS$290,000\nS$300,000\nS$310,000\nS$320,000\nS$330,000\nS$340,000\nS$350,000\nS$360,000\nS$370,000\nS$380,000\nS$390,000\nS$400,000\nS$410,000\nS$420,000\nS$430,000\nS$440,000\nS$450,000\nS$460,000\nS$470,000\nS$480,000\nS$490,000\nS$500,000\nS$510,000\nS$520,000\nS$530,000\nS$540,000\nS$550,000\nS$560,000\nS$570,000\nS$580,000\nS$590,000\nS$600,000\nS$610,000\nS$620,000\nS$630,000\nS$640,000\nS$650,000\nS$660,000\nS$670,000\nS$680,000\nS$690,000\nS$700,000\nS$710,000\nS$720,000\nS$730,000\nS$740,000\nS$750,000\nS$760,000\nS$770,000\nS$780,000\nS$790,000\nS$800,000\nS$810,000\nS$820,000\nS$830,000\nS$840,000\nS$850,000\nS$860,000\nS$870,000\nS$880,000\nS$890,000\nS$900,000\nS$910,000\nS$920,000\nS$930,000\nS$940,000\nS$950,000\nS$960,000\nS$970,000\nS$980,000\nS$990,000\nS$1,000,000",
                            "first_selection": "Please select amount",
                            "layout": "6",
                            "label": "Investment Amount",
                            "placeholder": null,
                            "name": "amount",
                            "default_value": null,
                            "helper_text": "Minimum investment is $50,000"
                        }
                    },
                    {
                        "type": "html-static",
                        "attributes": {
                            "content": "<h4>Heading</h4><hr><p>Test 1</p><p>Test paragraph 2</p>",
                            "layout": "6",
                            "label": "Instructions",
                            "placeholder": null,
                            "name": "instructions",
                            "default_value": null
                        }
                    }
                ]
            }
        ],
        step : 0,
      }
    },

  
    computed: {
        form () {
          return this.jsons[this.step];
        }, 
        count() {
          return Object.keys(this.jsons).length;
        },
    },

    methods: {
        changeTab (step){
            if (step >= 0 && step <= this.count) {
                //this.step = step;
                this.form = this.jsons[step];
            }
        },
        debug (event) {
          let json = event.target.value ?? null ;
        }
    }
  }
</script>