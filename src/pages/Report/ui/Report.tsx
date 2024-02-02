import { Button } from '../../../shared/ui/Button/Button';
import { ReportForm } from '../../../widgets/ReportForm/ui/ReportForm';
import sass from './Report.module.sass';

export const Report = () => {
  return (
    <div className={sass.container}>
        <ReportForm />
        <Button label='Send' className={sass.btn} />
    </div>
  )
}