const Toggle = ({ on, toggle }: { on?: boolean; toggle?: () => void }) => {
    return (
        <div className='form-control'>
            <label className='label cursor-pointer'>
                <span className='label-text hidden pr-3 sm:block'>
                    Prijzen {on ? 'incl.' : 'exl.'} btw
                </span>
                <span className='label-text hidden px-1 max-sm:block'>
                    {on ? 'incl.' : 'exl.'}btw
                </span>
                <input
                    checked={on}
                    onChange={toggle}
                    type='checkbox'
                    className='toggle max-sm:toggle-sm'
                />
            </label>
        </div>
    );
};

export default Toggle;
