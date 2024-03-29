import React, { Component } from 'react'

class Slider extends Component {

    
  render() {
    let isLoading = this.props.isLoading;

    return (
      <div className={isLoading}>
        <div class="ph-item">
            <div class="ph-col-12">
                <div class="ph-picture"></div>
                <div class="ph-row">
                    <div class="ph-col-6 big"></div>
                    <div class="ph-col-4 empty big"></div>
                    <div class="ph-col-2 big"></div>
                    <div class="ph-col-4"></div>
                    <div class="ph-col-8 empty"></div>
                    <div class="ph-col-6"></div>
                    <div class="ph-col-6 empty"></div>
                    <div class="ph-col-12"></div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Slider