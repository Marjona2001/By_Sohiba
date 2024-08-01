import React,{useState} from 'react'
import { catalog } from '../../data/catalog'
import { useTranslation } from 'react-i18next';

// console.log(catalog)

const Catalog = () => {
  const {t} = useTranslation();
  const [viewCatalog, setViewCatalog] = useState(false)

  
  return (
  <div className='catalog'>
  <h1>{t('weddings_page.catalog.catalog_head_text')}</h1>
    <div className={'container'} id={viewCatalog ? 'h-auto' : ''} >
      <div className="catalog-imgs">
        {
            catalog.map(img => (
              <div className="card-img" key={img.id}>
              <img src={img.pic} alt="" />
              {
                img?.status && 
                <span className={`img-status ${img.status.type}-img`}> {img.status.text}</span>
              }
              </div>
            ))
        }
        </div>
    </div>
    <button className="catalog-btn" onClick={()=> setViewCatalog(!viewCatalog) } >{t('weddings_page.catalog.catalog_btn')}</button>
  </div>
  )
}

export default Catalog;