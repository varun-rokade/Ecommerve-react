import React, { Component, Fragment } from 'react'

class MegaMenu extends Component {

    constructor(props)
    {
        super();
    }

    // MegaMenu()
    // {
    //     var accordion = document.getElementsByClassName("accordion")
    //     var accLength = accordion.length
    //     for(var i = 0 ; i< accLength ; i++)
    //     {
    //         accordion[i].addEventListener("click",function(){
    //             this.classList.toggle("active")
    //             var panel = this.nextElementSibling;
    //             if(panel.style.maxHeight)
    //             {   
    //                 panel.style.maxHeight = null
    //             }
    //             else
    //             {
    //                 panel.style.maxHeight = panel.scrollHeight +"px"
    //             }
    //         })
    //     }
    // }

    MegaMenuClick = (event) => {
        event.target.classList.toggle("active")
        var panel = event.target.nextElementSibling;
        if(panel.style.maxHeight)
                {   
                    panel.style.maxHeight = null
                }
                else
                {
                    panel.style.maxHeight = panel.scrollHeight +"px"
                }
    }

  render() {

    const categoryList = this.props.data;
    // console.log(categoryList[0].subcategory_name[0].subcategory_name)

    const categoryView = categoryList.map((categoryList,i) => {
        return (
            <div key={i.toString()}>
            <button className='accordion' onClick={this.MegaMenuClick}>
                    <img className='accordionMenuIcon' src={categoryList.category_image} /> &nbsp;
                                {categoryList.category_name}
                </button>

                <div className='panel'>
                    <ul>
                        {
                            (categoryList.subcategory_name).map((subcategory_name,i) => {
                                return <li key={i.toString()}><a href='#' className='accordionItem'>{subcategory_name.subcategory_name}</a></li>
                            })
                        }
                        {/* <li><a href='#' className='accordionItem'>{categoryList[0]}</a></li> */}
                        {/* <li><a href='#' className='accordionItem'>Mens Jeans</a></li> */}
                    </ul>
                </div>
                </div>
        )
    })


    return (
        <div className='accordionMenuDiv'>
            <div className='accordionMenuDivInside'>
                {categoryView}
            </div>
        </div>
    )
  }
}

export default MegaMenu