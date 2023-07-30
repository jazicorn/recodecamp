'use strict';
import { Q } from '../types/types.question';
import { nanoid } from 'nanoid';

export class Question implements Q {
    created_at!: Date;
    updated_at!: Date;
    id!: string | null;
    language!: string | null;
    level!: number | null;
    points!: number | null;
    task!: string | null;
    data!: object | null;
    result!: object | null;
    conditions!: object | null;
    constraints!: object | null;
    category!: string | null;
    category_sub!: string | null;
    tags!: string[] | null;
    refs!: object | null;

    constructor({
        id = null,
        language = null,
        level = null,
        points = null,
        task = null,
        data = null,
        result = null,
        conditions = null,
        constraints = null,
        category = null,
        category_sub = null,
        tags = null,
        refs = null,
    }) {
        this.created_at = new Date();
        this.updated_at = new Date();
        this.id = id;
        this.language = language;
        this.level = level;
        this.points = points;
        this.task = task;
        this.data = data;
        this.result = result;
        this.conditions = conditions;
        this.constraints = constraints;
        this.category = category;
        this.category_sub = category_sub;
        this.tags = tags;
        this.refs = refs;
    }

    // created_at
    public get getCreated_at(): Date {
        return this.created_at;
    }
    private set setCreated_at(date: Date) {
        this.created_at = date;
    }
    // updated_at
    public get getUpdated_at(): Date {
        return this.updated_at;
    }
    public set setUpdated_at(date: Date) {
        this.updated_at = date;
    }
    // id
    public get getId(): string | null {
        return this.id;
    }
    private set setId(id: string) {
        this.id = id;
    }
    // language
    public get getLanguage(): string | null {
        return this.language;
    }
    public set setLanguage(language: string) {
        this.language = language;
    }
    // level
    public get getLevel(): number | null {
        return this.level;
    }
    protected set setLevel(level: number) {
        this.level = level;
    }
    // points
    public get getPoints(): number | null {
        return this.points;
    }
    protected set setPoints(points: number) {
        this.points = points;
    }
    // task
    public get getTask(): string | null {
        return this.task;
    }
    public set setTask(task: string) {
        this.task = task;
    }
    // data
    public get getData(): object | null {
        return this.data;
    }
    public set setData(data: object) {
        this.data = data;
    }
    // result
    public get getResult(): object | null {
        return this.result;
    }
    public set setResult(result: object) {
        this.result = result;
    }
    // conditions
    public get getConditions(): object | null {
        return this.conditions;
    }
    public set setConditions(conditions: object) {
        this.conditions = conditions;
    }
    // constraints
    public get getConstraints(): object | null {
        return this.constraints;
    }
    public set setConstraints(constraints: object) {
        this.constraints = constraints;
    }
    // category
    public get getCategory(): string | null {
        return this.category;
    }
    public set setCategory(category: string) {
        this.category = category;
    }
    // category_sub
    public get getCategory_sub(): string | null {
        return this.category_sub;
    }
    public set setCategory_sub(category_sub: string) {
        this.category_sub = category_sub;
    }
    // tags
    public get getTags(): string[] | null {
        return this.tags;
    }
    public set setTags(tags: string[] | null) {
        this.tags = tags;
    }
    // references
    public get getRefs(): object | null {
        return this.refs;
    }
    public set setRefs(refs: object) {
        this.refs = refs;
    }
}
