import styles from './Search.module.css';

export const Search = () => {
    return (
        <form className={styles['search-form']}>
            <h2>
                <i className="fa-solid fa-user"></i>
                <span>Users</span>
            </h2>
            <div className={styles['search-input-container']}>
                <input type="text" placeholder="Please, select the search criteria" name="search" />
                {/* Show the clear button only if input field length !== 0 */}
                <button className={`${styles.btn} ${styles['close-btn']}`}>
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <button className={styles.btn} title="Please, select the search criteria">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>

            <div className={styles.filter}>
                <span>Search Criteria:</span>
                <select name="criteria" className={styles.criteria} defaultValue="">
                    <option value="">Not selected</option>
                    <option value="">First Name</option>
                    <option value="">Last Name</option>
                    <option value="">Email</option>
                    <option value="">Phone</option>
                </select>
            </div>
        </form>
    );
};