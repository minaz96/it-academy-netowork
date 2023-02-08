import React, {useState} from 'react';
import s from './ServiceBtn.module.scss'
import {CloseOutlined} from '@ant-design/icons'

const ServiceBtn = ({serviceTitle}) => {
    const [block, setBlock] = useState(true)
    return (
       <>
       {block ? (
       <button  onClick={()=> setBlock (!block)} className={s.service_block}>  {serviceTitle} </button>
        ) : (
       <button  onClick={()=> setBlock (!block)} className={s.service_block_active}> {serviceTitle} 
       <CloseOutlined className={s.icon_block}/>
       </button>
        )
}
        </>
    );
};

export default ServiceBtn;