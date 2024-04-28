export function TwitterFollowCard () {
    return( 
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            src="https://unavatar.io/malu" alt="avatar de una persona" />
            <div className='tw-followCard-info'>
                <strong>Mau</strong>
                <span className='tw-followCard-info-username'>@mau</span>
            </div>
        </header>

    <aside>
            <button className='tw-followCard-button'>Seguir</button>
        </aside>
     </article>
    )
}