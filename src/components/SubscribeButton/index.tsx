import styles from './styles.module.scss';
interface SubscribeButtonProps {
  princeId: string;
}

export function SubscribeButton({princeId}: SubscribeButtonProps) {
  return (
    <button 
      type="button" 
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}