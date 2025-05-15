import React from 'react'
import Button from '../components/public/Button'
import TagBtn from '../components/public/TagBtn'
import DashedLine from '../components/public/DashedLine'
import Total from '../components/public/Total'
import SolidLine from '../components/public/SolidLine'

function ListPage() {
    return (
        <div>
            <Button btn={"나와"}/>
            <TagBtn tagbtn={"도시락"}/>
            <DashedLine/>
            <Total productPrice={"4000"}/>
        </div>
    )
}

export default ListPage