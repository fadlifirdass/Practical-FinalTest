import React from 'react'


const ProductList = () => {

  return (
    <div>
    <h1 className='title'>Pengajuan</h1>
    <div className="card is-shadowless">
        <div className="card-content">
            <div className="content">
                     <form>
                     <div className="field">
                            <label className="label">Subject</label>
                            <div className="control">
                                <input type="text" className="input" placeholder='Subject' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Alasan Pengajuan</label>
                            <div className="control">
                                <input type="text" className="input" placeholder='Alasan Pengajuan' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Jenis Pengajuan</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select>
                                        <option value="Request Overtime">Request Overtime</option>
                                        <option value="Request Reimburstment">Request Reimburstment</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                            <button className="button is-success">Save</button>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    </div>
  </div>
  )
}

export default ProductList
