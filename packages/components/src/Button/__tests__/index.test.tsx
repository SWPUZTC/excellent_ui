import { render, screen } from '@testing-library/react'
import Button from '../index'
import { describe, expect, test } from 'vitest'

describe('Button', () => {
    test('should first', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
})
