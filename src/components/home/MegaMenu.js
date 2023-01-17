import React, { Component } from 'react'

class MegaMenu extends Component {

    constructor()
    {
        super();
        this.MegaMenu = this.MegaMenu.bind(this)
    }

    componentDidMount(){
        this.MegaMenu();
    }

    MegaMenu()
    {
        var accordion = document.getElementsByClassName("accordion")
        var accLength = accordion.length
        for(var i = 0 ; i< accLength ; i++)
        {
            accordion[i].addEventListener("click",function(){
                this.classList.toggle("active")
                var panel = this.nextElementSibling;
                if(panel.style.maxHeight)
                {   
                    panel.style.maxHeight = null
                }
                else
                {
                    panel.style.maxHeight = panel.scrollHeight +"px"
                }
            })
        }
    }

  render() {
    return (
        <div className='accordionMenuDiv'>
            <div className='accordionMenuDivInside'>
                <button className='accordion' onClick={this.MegaMenu}>
                    <img className='accordionMenuIcon' src='https://cdn-icons-png.flaticon.com/128/9283/9283207.png' /> &nbsp;
                                Men's Clothing
                </button>

                <div className='panel'>
                    <ul>
                        <li><a href='#' className='accordionItem'>Mens Tshirt</a></li>
                        <li><a href='#' className='accordionItem'>Mens Jeans</a></li>
                    </ul>
                </div>

                <button className='accordion' onClick={this.MegaMenu}>
                    <img className='accordionMenuIcon' src='https://cdn-icons-png.flaticon.com/128/9283/9283207.png' /> &nbsp;
                                Men's Clothing
                </button>

                <div className='panel' >
                    <ul>
                        <li><a href='#' className='accordionItem'>Mens Tshirt</a></li>
                        <li><a href='#' className='accordionItem'>Mens Jeans</a></li>
                    </ul>
                </div>

                <button className='accordion' onClick={this.MegaMenu}>
                    <img className='accordionMenuIcon' src='https://cdn-icons-png.flaticon.com/128/9283/9283207.png' /> &nbsp;
                                Men's Clothing
                </button>

                <div className='panel'>
                    <ul>
                        <li><a href='#' className='accordionItem'>Mens Tshirt</a></li>
                        <li><a href='#' className='accordionItem'>Mens Jeans</a></li>
                    </ul>
                </div>

                <button className='accordion' onClick={this.MegaMenu}>
                    <img className='accordionMenuIcon' src='https://cdn-icons-png.flaticon.com/128/9283/9283207.png' /> &nbsp;
                                Men's Clothing
                </button>

                <div className='panel'>
                    <ul>
                        <li><a href='#' className='accordionItem'>Mens Tshirt</a></li>
                        <li><a href='#' className='accordionItem'>Mens Jeans</a></li>
                    </ul>
                </div>
                <button className='accordion' onClick={this.MegaMenu}>
                    <img className='accordionMenuIcon' src='https://cdn-icons-png.flaticon.com/128/9283/9283207.png' /> &nbsp;
                                Men's Clothing
                </button>

                <div className='panel'>
                    <ul>
                        <li><a href='#' className='accordionItem'>Mens Tshirt</a></li>
                        <li><a href='#' className='accordionItem'>Mens Jeans</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
  }
}

export default MegaMenu