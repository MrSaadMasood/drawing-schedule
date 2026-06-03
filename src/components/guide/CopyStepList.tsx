import type { CopyStep } from '../../types/guide'

export function CopyStepList({ steps }: { steps: CopyStep[] }) {
  return (
    <>
      {steps.map((step, index) => (
        <div key={step.title} className="copy-step">
          <div className={`copy-num${step.variant === 'success' ? ' success' : ''}`}>
            {index + 1}
          </div>
          <div>
            <p className="copy-title">{step.title}</p>
            <p className="copy-body">{step.body}</p>
          </div>
        </div>
      ))}
    </>
  )
}
